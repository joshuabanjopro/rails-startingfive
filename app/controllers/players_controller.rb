class PlayersController < ApplicationController
  def index
    # Below is my initial attempt at running a series of queries to find the best player at each position based on points scored in the season
    # I ran a query for every position changing the position argument to reflect the different position I was interested in

    # player_obj_pg = Player.where(position: "PG").order(points: :desc).first
    # player_obj_sg = Player.where(position: "SG").order(points: :desc).first
    # player_obj_sf = Player.where(position: "SF").order(points: :desc).first
    # player_obj_pf = Player.where(position: "PF").order(points: :desc).first
    # player_obj_c = Player.where(position: "C").order(points: :desc).first

    # I devised another approach independently which instead iterates through a loop of positions defined in an array
    # And then passes the position as an argument into the query; this significantly reduced the lines of code
    arr_positions = [ "PG", "SG", "SF", "PF", "C" ]
    @players = []
    arr_positions.each do |position|
      @players.append(Player.where(position: position).order(points: :desc).first)
    end
  end

  def new
  end

  def create
  end

  def show
    @player = Player.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
