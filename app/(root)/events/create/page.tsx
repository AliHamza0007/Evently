import EventForm from '@/components/shared/EventForm';
import { auth, useUser } from '@clerk/nextjs';

const CreateEvent = () => {
  const { userId }: { userId: string | null } = auth();
  const { user } = useUser();

  console.log('userId', userId);
  console.log('user', user);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId || ''} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
