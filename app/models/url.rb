class Url < ApplicationRecord

  validates :original_link, presence: true, format: { with: URI::regexp(%w(http https)), message: "Invalid URL"}, uniqueness: true 
  validates :slug, presence: true, uniqueness: true
  validates :clicks, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }


  def Url.generate_slug 
     SecureRandom.urlsafe_base64
  end
end
