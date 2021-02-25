class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :original_link, null: false
      t.string :slug, null: false
      t.integer :clicks, default: 0, null: false 

      t.timestamps
    end
  end
end
