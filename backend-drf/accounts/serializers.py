from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerialzer(serializers.ModelSerializer):
    # password is marked as write_only=True so it will be accepted during
    # input (create/update requests) but will NOT be included in API responses.
    # This is important for security to prevent exposing sensitive data.
    # style={'input_type': 'password'} -> When enter password then password show in astrics form not normal text value
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        # User.objects.create()       -> Save the password in a plain text
        # User.objects.create_user()  -> Automatically hash the password and save
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        # user = User.objects.create_user(**validated_data)   -> When use this then need to give me all related field in the fields array
        return user
