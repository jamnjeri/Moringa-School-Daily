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

end
