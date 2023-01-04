class Api::BusinessesController < ApplicationController
    def index 
        @businesses = Business.all 
        render :index
    end

    def show 
        @business = Business.find(business_params)
        render :show
    end

    private 
    def business_params 
        params.require(:business).permit(:name, :description, :lat, :long)
    end
end