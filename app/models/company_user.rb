class CompanyUser < ActiveRecord::Base
  belongs_to :company
  belongs_to :user

  # cu = CompanyUser.new
  # cu.company_id= company.id 
  # user_id = CompanyUser.new
  # cu.user_id= user.id 

end
