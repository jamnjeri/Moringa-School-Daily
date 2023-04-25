class Article < ApplicationRecord
  # Relationships
  belongs_to :user
  has_many :comments
  has_many :article_categories, dependent: :destroy
  has_many :categories, through: :article_categories

  # ActiveStorage relationship
  has_one_attached :image


  # Roles
  enum status: [:pending, :approved, :rejected]

  # Validations
  validates :title, presence: true
  validates :body, presence: true


  def likes
    self[:likes] || 0
  end

  def dislikes
    self[:dislikes] || 0
  end

end
