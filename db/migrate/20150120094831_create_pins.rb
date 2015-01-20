class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :pininterest_id
      t.string :title
      t.string :like_url
      t.string :img_url
      t.integer :like_count
      t.integer :category_id
      
      t.timestamps
    end
  end
end
