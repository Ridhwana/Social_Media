class User < ActiveRecord::Base
  attr_accessible :bio, :email, :name, :work
end
