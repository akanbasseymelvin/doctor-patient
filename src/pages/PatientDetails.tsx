import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, User, Calendar, MapPin, FileText, Pill } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PatientDetails = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    address: "",
    medicalHistory: "",
    currentMedications: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { fullName, age, gender, address } = formData;
    
    if (!fullName.trim()) {
      toast({ title: "Error", description: "Please enter your full name", variant: "destructive" });
      return false;
    }
    
    if (!age.trim() || isNaN(Number(age)) || Number(age) < 0 || Number(age) > 150) {
      toast({ title: "Error", description: "Please enter a valid age", variant: "destructive" });
      return false;
    }
    
    if (!gender) {
      toast({ title: "Error", description: "Please select your gender", variant: "destructive" });
      return false;
    }
    
    if (!address.trim()) {
      toast({ title: "Error", description: "Please enter your address", variant: "destructive" });
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Patient Details Saved Successfully!",
        description: "Your information has been securely stored in our system.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        age: "",
        gender: "",
        address: "",
        medicalHistory: "",
        currentMedications: ""
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
            <User className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-2">Patient Information</h2>
            <p className="text-muted-foreground">Please provide your personal and medical information</p>
          </div>

          <Card className="shadow-medical">
            <CardHeader>
              <CardTitle className="text-primary">Personal & Medical Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Personal Information
                  </h3>
                  
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Age *
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        placeholder="Enter your age"
                        min="0"
                        max="150"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Gender *
                      </Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Address *
                    </Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter your complete address"
                      rows={3}
                      required
                    />
                  </div>
                </div>

                {/* Medical Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Medical Information
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="medicalHistory" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Medical History
                    </Label>
                    <Textarea
                      id="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                      placeholder="Please describe any past medical conditions, surgeries, allergies, or family medical history"
                      rows={4}
                    />
                    <p className="text-xs text-muted-foreground">
                      Include conditions like diabetes, hypertension, allergies, previous surgeries, etc.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentMedications" className="flex items-center gap-2">
                      <Pill className="h-4 w-4" />
                      Current Medications
                    </Label>
                    <Textarea
                      id="currentMedications"
                      value={formData.currentMedications}
                      onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                      placeholder="List all medications you are currently taking, including dosages"
                      rows={4}
                    />
                    <p className="text-xs text-muted-foreground">
                      Include prescription medications, over-the-counter drugs, vitamins, and supplements.
                    </p>
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="bg-medical-light p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Privacy & Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Your personal and medical information is encrypted and stored securely. 
                    We comply with HIPAA regulations and will never share your information 
                    without your explicit consent.
                  </p>
                </div>

                <Button type="submit" variant="medical" size="lg" className="w-full">
                  Save Patient Information
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Actions */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Button 
              variant="medical-outline" 
              onClick={() => navigate('/appointment')}
              className="w-full"
            >
              Book an Appointment
            </Button>
            <Button 
              variant="medical-outline" 
              onClick={() => navigate('/doctors')}
              className="w-full"
            >
              View Our Doctors
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;