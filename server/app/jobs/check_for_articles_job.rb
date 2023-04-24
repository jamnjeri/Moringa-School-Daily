class CheckForArticlesJob < ApplicationJob
  queue_as :default
  
  def perform(category_id)
    category = Category.find(category_id)
    new_articles = Article.new_articles_for_category(category.id)
    new_posts.each do |post|
      category.subscriptions.each do |subscription|
        subscription.user.send_notification(article)
      end
    end
  end
end
