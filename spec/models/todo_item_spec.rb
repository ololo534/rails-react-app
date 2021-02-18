# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TodoItem, type: :model do
  describe 'creation' do
    let(:todo_item) { FactoryBot.create(:todo_item) }

    it 'can be created' do
      expect(todo_item).to be_valid
    end
  end

  describe 'validations' do
    let(:todo_item) { FactoryBot.build(:todo_item) }

    it 'has a title' do
      todo_item.title = nil
      expect(todo_item).not_to be_valid
    end

    it 'has a user' do
      todo_item.user = nil
      expect(todo_item).not_to be_valid
    end
  end

  describe 'default values' do
    let(:todo_item) { FactoryBot.build(:todo_item) }

    it 'has complete set to false' do
      expect(todo_item.complete).to eq(false)
    end
  end

  describe 'order scope' do
    let!(:old_todo_item) { FactoryBot.create(:todo_item, created_at: Time.zone.now - 1.day) }
    let!(:future_todo_item) { FactoryBot.create(:todo_item, created_at: Time.zone.now + 1.day) }

    it 'short sort todo items in descending order' do
      expect(described_class.first).to eq(future_todo_item)
    end
  end
end
