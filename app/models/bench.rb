class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    ne = bounds["northEast"]
    sw = bounds["southWest"]
    Bench.where("lat < ? AND lat > ? AND lng < ? AND lng > ?", ne["lat"], sw["lat"], ne["lng"], sw["lng"])
  end

end
