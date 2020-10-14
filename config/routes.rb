# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, path: 'auth', path_names: { sign_in: 'login',
                                                 sign_out: 'logout', password: 'secret',
                                                 confirmation: 'verification', unlock: 'unblock',
                                                 registration: 'register', sign_up: 'cmon_let_me_in' }
  authenticated :user do
    root 'pages#my_todo_items', as: :authenticated_root
  end
  root 'pages#home'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :todo_items, only: %i[index show create update destroy]
    end
  end
end
