class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :likes, :dislikes, :status, :image_url, :user_id

  belongs_to :user, serializer: UserSerializer
end
