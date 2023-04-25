class CommentSerializer
  include JSONAPI::Serializer
  attributes :id, :content, :parent_id, :user_id, :article_id
end
