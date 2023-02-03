class Api::BusinessesController < ApplicationController
    def index 
        search = params[:query].downcase.split(" ") if params[:query]
        @filtered_businesses = []
        if params[:query]
            search.each do |term|
                @filtered_businesses << Business.where("LOWER(name) LIKE ?", "%#{term}%")
            end
        else
            @filtered_businesses = Business.all
        end
        @businesses = @filtered_businesses
        render :index
    end

    def show 
        @business = Business.find(params[:id])
        render :show
    end

    private 
    def business_params 
        params.require(:business).permit(:id, :name, :description, :lat, :long)
    end
end