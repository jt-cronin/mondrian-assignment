def addToFile (input)
	File.open("storage.csv", "a") do |line|
		line.puts "\r#{input}"
	end
end

