class CompaniesController < ApplicationController
  respond_to :json

  def index
    respond_with Company.all
  end

  def show
    respond_with Company.find(params[:id])
  end

  def create
    respond_with Company.create(params[:user])
  end

  def update
    respond_with Company.update(params[:id], params[:user])
  end

  def destroy
    respond_with Company.destroy(params[:id])
  end

end
