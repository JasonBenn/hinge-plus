Rails.application.routes.draw do
  Rails.logger.debug 'routes files!!'
  get 'sessions/create'

  get 'sessions/destroy'

  get 'auth/facebook/callback' => 'sessions#create'
  get 'auth/failure' => redirect('/')
  get 'signout' => 'sessions#destroy', as: 'signout'

  namespace :api do
    namespace :v1 do
      resources :matches

      get 'to-rate' => 'hinge#to_rate'
      get 'like' => 'hinge#like'
      get 'pass' => 'hinge#pass'
    end
  end

  # Everything else goes to Ember.
  root to: 'home#index'
  get '*path', to: 'home#index'
end
