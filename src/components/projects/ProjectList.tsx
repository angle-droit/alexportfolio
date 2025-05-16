"use client";

import { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '@/lib/constants';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import type { Project } from '@/types';

export default function ProjectList() {
  const [filters, setFilters] = useState({ searchTerm: '', category: 'all' });

  const allCategories = useMemo(() => {
    const categories = new Set(PROJECTS_DATA.map(p => p.category));
    return Array.from(categories);
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const searchMatch =
        project.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(filters.searchTerm.toLowerCase()));
      const categoryMatch = filters.category === 'all' || project.category === filters.category;
      return searchMatch && categoryMatch;
    });
  }, [filters]);

  return (
    <div>
      <ProjectFilter categories={allCategories} onFilterChange={setFilters} />
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
