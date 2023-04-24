class User < ApplicationRecord
    # roles
    enum role: [:technicalwriter, :moderator, :admin]

    # Method to allow easy access of a user's role
    def role
        User.roles.key(self[:roles])
    end

    has_many :posts

    # Helper method to encrypt password
    has_secure_password

    # Validations
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP} # checks if the email attribute of a model matches a valid email format
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 6}, if: -> {new_record? || !password.nil?}

        
    def send_new_article_notifications
        new_article = []
        categories.each do |category|
          new_article += Article.new_articles_for_category(category.id)
        end
    
        new_posts.each do |post|
          UserMailer.new_article_notification(self, article).deliver_now
        end
    end
end
