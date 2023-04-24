class UserMailer < ApplicationMailer
    def new_article_notification(user, article)
        @user = user
        @article = article
        mail(to: user.email, subject: "New article in #{article.category.name} category")
    end
end
