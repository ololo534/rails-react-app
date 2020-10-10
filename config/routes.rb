# frozen_string_literal: true

Rails.application.routes.draw do
  root 'pages#home'
  get 'pages/my_todo_items'
end
