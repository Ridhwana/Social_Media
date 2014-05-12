class UsersController < ApplicationController
  respond_to :json

  def index
    respond_with User.all
  end

  def show
    respond_with Users.find(params[:id])
  end

  def create
    respond_with Users.create(params[:user])
  end

  def update
    respond_with Users.update(params[:id], params[:user])
  end

  def destroy
    respond_with Users.destroy(params[:id])
  end

end