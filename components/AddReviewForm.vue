<template>
    <div class="add_review">
        <SfButton v-if="!isVisible" class="sf-button--text" @click="isVisible = true">Add review</SfButton>

        <div v-if="isVisible" class="add_review--form">
            <form>
                <SfInput
                    label="Your name"
                    name="fullName"
                    class="form__element"
                />
                <SfRating max="5" score="5" class="form__element"></SfRating>
                <SfTextarea
                    class="form__element"
                    name="message"
                    placeholder="Add your review"
                    cols="50"
                    rows="5"
                >
                </SfTextarea>
                <SfButton>Submit</SfButton>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useReview } from '@vue-storefront/bigcommerce';
import { SfButton, SfInput, SfTextarea, SfRating } from '@storefront-ui/vue';

export default defineComponent({
  name: 'AddReviewForm',

  setup() {
    const { add } = useReview('productReviews');
    const isVisible = ref(false);

    return {
      isVisible,
      add
    };
  },

  components: {
    SfButton,
    SfInput,
    SfTextarea,
    SfRating
  }
});
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.form {
  padding: var(--spacer-sm) 0;
  &__group {
    display: flex;
    align-items: flex-start;
  }
  &__action-button {
    &:first-child {
      margin: var(--spacer-sm) 0 0 0;
    }
    &--secondary {
      margin: var(--spacer-sm) 0 var(--spacer-sm) var(--spacer-base);
    }
  }
  &__button {
    --button-width: 100%;
  }
  .sf-rating {
      &__icon {
        --icon-size: 5rem;
      }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 var(--spacer-2xl) 0 0;
    &:last-of-type {
      margin: 0 calc(var(--spacer-2xl) - var(--spacer-sm)) 0 0;
    }
    &__element {
      margin: 0 0 var(--spacer-sm) 0;
      flex: 0 0 100%;
      &--half {
        flex: 1 1 50%;
        &-even {
          padding: 0 0 0 var(--spacer-xl);
        }
      }
      &--range {
        margin: var(--spacer-xl) var(--spacer-base) var(--spacer-2xl);
      }
    }
    &__action {
      flex: 0 0 100%;
      display: flex;
    }
    &__button {
      --button-width: auto;
    }
  }
}
</style>
