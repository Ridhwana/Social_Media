class CreateUsersCompanies < ActiveRecord::Migration
  def change
    create_table :company_users, :id => false do |t|
      t.integer :company_id
      t.integer :user_id
    end
  end
end
