import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Calendar, Clock, User, Mail, Phone, Stethoscope } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Appointment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    specialization: "",
    symptoms: ""
  });

  const specializations = [
    "General Medicine",
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Gynecology",
    "Psychiatry"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { fullName, email, phone, date, time, specialization } = formData;
    
    if (!fullName.trim()) {
      toast({ title: "Error", description: "Please enter your full name", variant: "destructive" });
      return false;
    }
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast({ title: "Error", description: "Please enter a valid email address", variant: "destructive" });
      return false;
    }
    
    if (!phone.trim() || !/^\d{10,}$/.test(phone.replace(/\D/g, ''))) {
      toast({ title: "Error", description: "Please enter a valid phone number", variant: "destructive" });
      return false;
    }
    
    if (!date) {
      toast({ title: "Error", description: "Please select a preferred date", variant: "destructive" });
      return false;
    }
    
    if (!time) {
      toast({ title: "Error", description: "Please select a preferred time", variant: "destructive" });
      return false;
    }
    
    if (!specialization) {
      toast({ title: "Error", description: "Please select a doctor specialization", variant: "destructive" });
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Appointment Booked Successfully!",
        description: `Your appointment has been scheduled for ${formData.date} at ${formData.time}. We'll send you a confirmation email shortly.`,
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        specialization: "",
        symptoms: ""
      });
    }
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
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-2">Book an Appointment</h2>
            <p className="text-muted-foreground">Schedule your visit with our healthcare professionals</p>
          </div>

          <Card className="shadow-medical">
            <CardHeader>
              <CardTitle className="text-primary">Appointment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Appointment Scheduling */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Preferred Time *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4" />
                    Doctor Specialization *
                  </Label>
                  <Select value={formData.specialization} onValueChange={(value) => handleInputChange('specialization', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      {specializations.map((spec) => (
                        <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="symptoms">Describe Your Symptoms</Label>
                  <Textarea
                    id="symptoms"
                    value={formData.symptoms}
                    onChange={(e) => handleInputChange('symptoms', e.target.value)}
                    placeholder="Please describe your symptoms or reason for visit (optional)"
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="medical" size="lg" className="w-full">
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Appointment;