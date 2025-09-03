class CreatePlayers < ActiveRecord::Migration[7.2]
  def change
    create_table :players do |t|
      t.string :name
      t.string :position
      t.integer :assists
      t.integer :steals
      t.integer :blocks
      t.integer :points
      t.string :team
      t.integer :season

      t.timestamps
    end
  end
end
