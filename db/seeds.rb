# frozen_string_literal: true

10.times do |i|
  User.create(email: "user-#{i+1}@example.com", password: "password", password_confirmation: "password")
end
