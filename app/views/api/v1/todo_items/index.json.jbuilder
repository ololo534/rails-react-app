# frozen_string_literal: true

json.array! @todo_items, partial: 'api/v1/todo_items/todo_item', as: :todo_item
