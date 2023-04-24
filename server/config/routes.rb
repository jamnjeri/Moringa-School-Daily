Rails.application.routes.draw do

  resources :notifications
  
  # SUBSCRIPTIONS
  resources :subscriptions ,only: [:create, :index, :destroy]
  
  #CATEGORIES
  resources :categories ,only: [:index, :create, :destroy]

  #ARTICLE CATEGORIES
  resources :article_categories ,only: [:create]


  # USERS
  resources :users, only: [:index, :update, :destroy]

  # POST /signup
  post "/signup", to: "users#create"

  # stay logged in
  get "/me", to: "users#show"

  # SESSIONS
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # PROFILE
  resources :profiles


  # ARTICLES
  resources :articles

  # Likes
  patch "/articles/:id/likes", to: "articles#like"

  # Dislikes
  patch "/articles/:id/dislikes", to: "articles#dislike"

end
