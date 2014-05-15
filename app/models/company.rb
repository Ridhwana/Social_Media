class Company < ActiveRecord::Base
  attr_accessible :name
  # has_and_belongs_to_many :users
  has_many :company_users
  has_many :users, through: :company_users , foreign_key: :company_id
end
