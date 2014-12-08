class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.string :first_name
      t.string :last_name
      t.datetime :last_seen
      t.text :about_me
      t.string :work
      t.string :college
      t.string :height
      t.string :tags
      t.string :mutual_friends

      t.timestamps
    end
  end
end

