require 'test_helper'

class UrlsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @url = Url.new(original_link: "http://example.com")
    @url.shorten_url
    @url.save
  end

  test "should be valid" do
    assert @url.valid?
  end

  test "original url should be valid" do
    new_url = @url
    new_url.original_link = " " * 6
    assert_not new_url.valid?
  end

  test "original url should be unique" do
    new_url = Url.new(original_link: @url.original_link)
    assert_not new_url.valid?
  end

  test "slug should be valid" do
    new_url = @url
    new_url.slug = " " * 6
    assert_not new_url.valid?
  end

  test "slug url should be unique" do
    new_url = Url.new(original_link: @url.original_link, slug: @url.slug)
    assert_not new_url.valid?
  end

  test "clicks should be present" do
    new_url = Url.new(original_link: "http://google.com", clicks: "  ")
    new_url.shorten_url
    assert_not new_url.valid?
  end

end
