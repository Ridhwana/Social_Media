class User < ActiveRecord::Base
  attr_accessible :bio, :email, :name, :work
  has_many :company_users
  has_many :users, through: :company_users , foreign_key: :company_id
end
