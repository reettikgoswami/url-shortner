class AddIndexToUrlsOriginalLink < ActiveRecord::Migration[6.0]
  def change
    add_index :urls, :original_link, unique: true
  end
end
