# frozen_string_literal: true

class PagesController < ApplicationController
  before_action :authenticate_user!

  def home; end

  def my_todo_items; end
end
