class UrlsController < ApplicationController

  before_action :get_url, only: [:show]

  def index
    @urls = Url.all
    render status: :ok, json: { urls: @urls }
  end

  def create 
    @url = Url.new(url_params)
    @url.slug = Url.generate_slug
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
