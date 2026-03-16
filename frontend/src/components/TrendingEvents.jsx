import React, { useState, useEffect } from 'react';
import eventService from '../services/eventService';
import EventCard from './EventCard';
import LoadingSpinner from './LoadingSpinner';

const TrendingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        // We can sort by most attendees on the backend or frontend.
        // For now, let's fetch all and sort by attendee count on frontend for better granularity.
        const response = await eventService.getEvents({ limit: 10, sort: '-createdAt' });
        
        // Custom trending algorithm: (attendees / capacity) * 0.7 + (freshness) * 0.3
        const trending = response.data.sort((a, b) => {
          const popularityA = a.attendees.length / (a.capacity || 1);
          const popularityB = b.attendees.length / (b.capacity || 1);
          return popularityB - popularityA;
        }).slice(0, 3);
        
        setEvents(trending);
      } catch (error) {
        console.error('Error fetching trending events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (events.length === 0) return null;

  return (
    <section className="py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-black mb-2 text-white">Trending Now</h2>
          <p className="text-gray-500">The most anticipated events in the community</p>
        </div>
        <div className="hidden md:block">
          <span className="text-sm font-bold text-blue-500 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
            🔥 Dynamic Popularity
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default TrendingEvents;
