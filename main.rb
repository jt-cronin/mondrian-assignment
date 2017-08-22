require 'sinatra'
require_relative 'functions.rb'
require 'pry'

get '/' do
	erb :homepage
end

get '/toServer' do 
	erb :toServer
end

post '/toServer' do
	params[:dog]

	addToFile(params[:dog])
	redirect '/'
end
