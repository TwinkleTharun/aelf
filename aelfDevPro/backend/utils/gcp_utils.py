from google.cloud import storage

def upload_to_gcs(contract):
    client = storage.Client()
    bucket = client.bucket('your-bucket-name')
    blob = bucket.blob('contracts/contract.txt')
    blob.upload_from_string(contract)
    return blob.public_url
