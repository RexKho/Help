Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:create, :destroy]
    end
    resource :session, only: [:show, :create, :destroy]
  end
end
