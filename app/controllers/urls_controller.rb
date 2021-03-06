class UrlsController < ApplicationController

  before_action :get_url, only: [:show, :update]

  def index
    @urls = Url.all.order("pinned DESC, updated_at DESC")
    render status: :ok, json: { urls: @urls }
  end

  def create 
    @url = Url.new(url_params)
    @url.shorten_url
    if @url.save
      render status: :ok, json: { notice: "Link shorten successfully" } 
    else 
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end

  def show 
    @url.increment!(:clicks)
    redirect_to @url.original_link
  end

  def update 
    if @url.toggle(:pinned).save
      render status: :ok, json: { url: @url}
    else
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end


  private

  def url_params 
    params.require(:url).permit(:original_link)
  end

  def get_url 
    @url = Url.find_by(slug: params[:slug])
    unless @url
        render status: :not_found, json: { errors: ['Url not found'] }
    end
  end

end
