# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
require "json"
require "rest-client"
require "pp"

puts "Cleaning database..."
Player.destroy_all

puts "Populating Players table with sourced from API..."

response = RestClient.get "http://rest.nbaapi.com/api/PlayerDataTotals/season/2010"
arr_players = JSON.parse(response)

puts("Testing...")
pp(arr_players[0])

arr_players.each do |player|
  puts("Inserting a new Player into the Players table...")
  player_new = Player.new()
  player_new.name = player["playerName"]
  player_new.position = player["position"]
  player_new.assists = player["assists"].to_i
  player_new.steals = player["steals"].to_i
  player_new.blocks = player["blocks"].to_i
  player_new.points = player["points"].to_s
  player_new.team = player["team"]
  player_new.season = player["season"].to_i

  player_new.save
  if player_new
    puts("A new Player has been added to the Players table successfully")
  else
    puts("Houston, we have a problem...")
  end

  puts("Finished!")
end
