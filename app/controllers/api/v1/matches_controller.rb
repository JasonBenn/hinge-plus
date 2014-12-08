class Api::V1::MatchesController < ApplicationController
  respond_to :json

  def index
    respond_with Match.all
  end

  def show
    respond_with match
  end

  def create
    respond_with :api, :v1, Match.create(match_params)
  end

  def update
    respond_with match.update(match_params)
  end

  def destroy
    respond_with match.destroy
  end

  private

  def match
    Match.find(params[:id])
  end

  def match_params
    params.require(:match).permit(:first_name, :last_name, :last_seen, :about_me, :work, :college, :height, :tags, :mutual_friends)
  end
end