class Api::businessesController < ApplicationController
    def index 
        @businesses = Business.all 
        render :index
    end
end