class SessionsController < ApplicationController
  def create
    session['my_fb_id'] = request.env['omniauth.auth']['extra']['raw_info']['id']
    session['token'] = request.env['omniauth.auth']['credentials']['token']
    redirect_to root_url
  end

  def destroy
  end
end
