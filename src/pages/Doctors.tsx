import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Search, Stethoscope, Star, Clock, MapPin } from "lucide-react";

const Doctors = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiology",
      bio: "Experienced cardiologist with 15+ years in cardiovascular medicine. Specializes in preventive cardiology and heart disease management.",
      availability: "Mon-Fri: 9:00 AM - 5:00 PM",
      rating: 4.9,
      location: "Heart Center, Floor 3",
      image: "👩‍⚕️"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Dermatology",
      bio: "Board-certified dermatologist focusing on skin cancer prevention, cosmetic dermatology, and advanced skin treatments.",
      availability: "Tue-Sat: 10:00 AM - 6:00 PM",
      rating: 4.8,
      location: "Skin Care Center, Floor 2",
      image: "👨‍⚕️"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Pediatrics",
      bio: "Pediatric specialist dedicated to providing comprehensive healthcare for children from infancy through adolescence.",
      availability: "Mon-Fri: 8:00 AM - 4:00 PM",
      rating: 4.9,
      location: "Children's Wing, Floor 1",
      image: "👩‍⚕️"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialization: "Orthopedics",
      bio: "Orthopedic surgeon specializing in sports medicine, joint replacement, and minimally invasive procedures.",
      availability: "Mon-Thu: 7:00 AM - 3:00 PM",
      rating: 4.7,
      location: "Orthopedic Center, Floor 4",
      image: "👨‍⚕️"
    },
    {
      id: 5,
      name: "Dr. Lisa Anderson",
      specialization: "Neurology",
      bio: "Neurologist with expertise in treating headaches, epilepsy, stroke, and neurodegenerative disorders.",
      availability: "Wed-Sun: 9:00 AM - 5:00 PM",
      rating: 4.8,
      location: "Neurology Department, Floor 5",
      image: "👩‍⚕️"
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      specialization: "General Medicine",
      bio: "Primary care physician providing comprehensive healthcare, preventive medicine, and chronic disease management.",
      availability: "Mon-Fri: 8:00 AM - 6:00 PM",
      rating: 4.6,
      location: "General Practice, Floor 1",
      image: "👨‍⚕️"
    }
  ];

  const specializations = [
    "all",
    "General Medicine",
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Orthopedics",
    "Pediatrics"
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization === "all" || 
                                 doctor.specialization === selectedSpecialization;
    return matchesSearch && matchesSpecialization;
  });

  const handleTalkToDoctor = (doctorName: string) => {
    alert(`Connecting you with ${doctorName}... This feature will be available soon!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light to-background">
      {/* Header */}
      <header className="bg-white shadow-card-medical">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">MediConnect</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Stethoscope className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-2">Our Medical Team</h2>
          <p className="text-muted-foreground">Meet our qualified healthcare professionals</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search doctors by name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Filter by specialization" />
            </SelectTrigger>
            <SelectContent>
              {specializations.map((spec) => (
                <SelectItem key={spec} value={spec}>
                  {spec === "all" ? "All Specializations" : spec}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{doctor.image}</div>
                <CardTitle className="text-primary">{doctor.name}</CardTitle>
                <div className="flex items-center justify-center gap-2 text-sm text-medical-primary">
                  <Stethoscope className="h-4 w-4" />
                  {doctor.specialization}
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {doctor.bio}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{doctor.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{doctor.location}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="medical-outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => navigate('/appointment')}
                  >
                    Book Appointment
                  </Button>
                  <Button 
                    variant="medical" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleTalkToDoctor(doctor.name)}
                  >
                    Talk to Doctor
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <Stethoscope className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No doctors found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all doctors.
            </p>
            <Button 
              variant="medical-outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialization("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;