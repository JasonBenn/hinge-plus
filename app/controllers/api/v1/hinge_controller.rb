class Api::V1::HingeController < ApplicationController

  def hinge_api
    HingeAPI.new(params['myFBID'], params['token'])
  end

  def to_rate
    render_as_json hinge_api.to_rate
  end

  def like
    render_as_json(hinge_api.like(params['otherFBID']))
  end

  def pass
    render_as_json(hinge_api.pass(params['otherFBID']))
  end
end
