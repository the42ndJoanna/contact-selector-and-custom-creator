public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [
            SELECT Id, Name, Title, Email, Department
            FROM Contact
        ];
    }

    @AuraEnabled
    public static void createNewContact(String firstName, String lastName, String title, String department, String email, String phone, Decimal orderAmount) {
        // Create a new Contact object
        Contact newContact = new Contact();
        newContact.FirstName = firstName;
        newContact.LastName = lastName;
        newContact.Title = title;
        newContact.Department = department;
        newContact.Email = email;
        newContact.Phone = phone;
        newContact.Order_Amount__c = orderAmount;

        // Insert the Contact into Salesforce
        insert newContact;
    }
}