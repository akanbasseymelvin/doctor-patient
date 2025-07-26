import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, UserCheck, Calendar, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light to-background">
      {/* Header */}
      <header className="bg-white shadow-card-medical">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">MediConnect</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Your Health, <span className="text-primary">Our Priority</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connect with qualified healthcare professionals and manage your medical needs 
            with our comprehensive patient care platform.
          </p>
          
          {/* Action Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-2 cursor-pointer" 
                  onClick={() => navigate('/appointment')}>
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Book Appointment</h3>
                <p className="text-muted-foreground mb-6">Schedule your visit with our experienced doctors</p>
                <Button variant="medical" size="lg" className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => navigate('/doctors')}>
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">View Doctors</h3>
                <p className="text-muted-foreground mb-6">Browse our team of qualified healthcare professionals</p>
                <Button variant="medical-outline" size="lg" className="w-full">
                  View Doctors
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => navigate('/patient-details')}>
              <CardContent className="p-8 text-center">
                <UserCheck className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Patient Details</h3>
                <p className="text-muted-foreground mb-6">Manage your personal health information securely</p>
                <Button variant="medical-outline" size="lg" className="w-full">
                  Enter Details
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <Button 
            variant="medical" 
            size="xl" 
            onClick={() => navigate('/appointment')}
            className="animate-pulse"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose MediConnect?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive healthcare solutions designed with your convenience and well-being in mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-medical-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Care</h4>
              <p className="text-muted-foreground">Qualified and experienced healthcare professionals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Easy Scheduling</h4>
              <p className="text-muted-foreground">Book appointments at your convenience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Secure Records</h4>
              <p className="text-muted-foreground">Your health information is safe and private</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-darker text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6" />
            <span className="text-xl font-semibold">MediConnect</span>
          </div>
          <p className="text-medical-soft">
            © 2024 MediConnect. Your trusted healthcare partner.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;