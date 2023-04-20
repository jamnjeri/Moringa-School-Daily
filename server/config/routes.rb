Rails.application.routes.draw do

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
  resources :profiles, only: [:index, :show, :create, :update, :destroy]

  get "latest", to: "profiles#latest"

  # ARTICLES
  resources :articles, only: [:index, :show, :create, :update, :destroy]

  # Likes
  patch "/articles/:id/likes", to: "articles#like"

  # Dislikes
  patch "/articles/:id/dislikes", to: "articles#dislike"

end
